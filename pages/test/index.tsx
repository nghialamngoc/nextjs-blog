import { GetServerSideProps } from "next";
import * as React from "react";

export interface ITestDynamicImportProps {
  data: any;
}

export default function TestDynamicImport({ data }: ITestDynamicImportProps) {
  console.log(data);

  return (
    <div>
      <div>Test Dynamic Import </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  console.log("GetServerSideProps run");
  
  res.setHeader("Cache-Control", "maxage=600, stale-while-revalidate");

  return {
    props: {},
  };
};
