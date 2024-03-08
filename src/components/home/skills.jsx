"use client";

import React from "react";
import TagService from '@/services/tag-service';
import SWRError from '@/components/swr-error';
import useSWR from 'swr';
import {Skeleton} from "@nextui-org/react";

const fetcher = () => TagService.get();

const Skills = () => {
  
  const { data, error } = useSWR(`/tags`, fetcher, { revalidateOnFocus: false });
  if (error) return <div className="flex px-2 flex-row mt-6 flex-wrap w-full"><SWRError error={"Veriler yüklenirken bir hata oluştu."} /></div>;
  if (!data) {
    return (
      <div className="flex px-2 flex-row mt-6 flex-wrap w-full gap-1">
        {Array.from({ length: 20 }).map((_, index) => {
          return <Skeleton key={index} className="h-5 w-14 rounded-lg" />;
        })}
      </div>
    );
  }


  return (
    <div className="flex px-2 flex-row mt-6 flex-wrap w-full">
      {data.data.map((tag, index) => (
      <span key={index} className="skill-tag">{tag.title}</span>
      ))}
    </div>
  )
}

export default Skills;