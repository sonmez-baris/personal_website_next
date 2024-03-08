"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import PostService from '@/services/post-service';
import useSWR from 'swr';
import SWRError from '@/components/swr-error';
import {Skeleton} from "@nextui-org/react";
import Link from 'next/link';
import {Chip} from "@nextui-org/react";

const Blog = () => {
  const searchParams = new URLSearchParams();
  searchParams.append('limit', 6);
  searchParams.append('type', '1');

  const fetcher = () => PostService.get(searchParams.toString());
  const { data, error } = useSWR(`/posts?${searchParams.toString()}`, fetcher, { revalidateOnFocus: false });
  if (error) return <div className="flex px-2 flex-row mt-6 flex-wrap w-full"><SWRError message={"Veriler yüklenirken bir hata oluştu."} /></div>;
  if (!data) {
    return(
      <div className="grid grid-cols-2 md:grid-cols-3 px-2 mt-6 gap-2">
        <Skeleton className="h-48 rounded-lg mb-2" />
        <Skeleton className="h-48 rounded-lg mb-2" />
        <Skeleton className="h-48 rounded-lg mb-2" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-2 mt-6 gap-2">
      {data.data.map((post, index) => (
        <Link key={index} href={`blog/${post.seflink}`}>
          <div className="bg-bsonmezsecondary dark:bg-gray-800 px-2 py-3 rounded-xl">
            
            <p className="text-bsonmezprimary mb-2"><Chip size="sm">{post.category}</Chip></p>
            <h5 className="text-sm font-semibold mb-2">{ post.title.length > 35 ? post.title.substring(0, 35) + "..." : post.title }</h5>
            <p className="text-sm">{ post.summary.length > 90 ? post.summary.substring(0, 90) + "..." : post.summary }</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Blog;