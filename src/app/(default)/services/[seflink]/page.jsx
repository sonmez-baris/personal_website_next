"use client";

import Link from 'next/link';
import Image from 'next/image';
import PostService from '@/services/post-service';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import SWRError from '@/components/swr-error';
import {config} from '@/config';
import SWRTextLoading from '@/components/swr-text-loading';

const Post = () => {
  const params = useParams();
  
  const fetcher = () => PostService.show(params.seflink);
  const { data, error } = useSWR(`/posts/${params.seflink}`, fetcher, { revalidateOnFocus: false });
  if (error) return <div className="flex px-2 flex-row mt-6 flex-wrap w-full"><SWRError message={"Veriler yüklenirken bir hata oluştu."} /></div>;
  if (!data) return <SWRTextLoading />;

  const HtmlContent = ({ htmlContent }) => {
    return <div className="indent-4 mb-3" dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }

  return (
    <div className="flex flex-col px-2 mt-4">
      <div className="w-full h-92">
        <Image src={`${config.API_URL}/../../${data.data.cover}`} alt="Barış" width={600} height={400} objectFit="cover" />
      </div>
      <nav className="rounded-md w-full mt-3">
        <ol className="list-reset flex justify-end text-sm">
          <li><Link href="/"><span className="text-blue-600 hover:text-blue-700">Anasayfa</span></Link></li>
          <li><span className="text-gray-500 mx-2">/</span></li>
          <li><Link href="/services"><span className="text-gray-500">Hizmetler</span></Link></li>
        </ol>
      </nav>

      <h4 className="font-semibold text-lg my-3 border-b-1">{data.data.title}</h4>
      <HtmlContent htmlContent={data.data.content} />  
    </div>
  )
};

export default Post;