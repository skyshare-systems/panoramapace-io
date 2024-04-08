import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { aoenik_regular } from "@/public/fonts";

const NonCryptoAssets = () => {
  const assets = [
    {
      name: "Property 1",
      description: "House on Forbes Subdivision.",
      category: "Real Estate Property",
      estimateValue: "$ 60,000",
    },
    {
      name: "BDO Unibank",
      description: "Personal account",
      category: "Banking",
      estimateValue: "$ 15,420",
    },
  ];
  return (
    <div className="flex flex-col grow items-start justify-start w-full">
      <h1
        className={cn(
          aoenik_regular.className,
          "ty-subheading text-white-50 py-3"
        )}
      >
        Non-crypto assets
      </h1>
      <Table className="text-white-100">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Estimate Value</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assets.map((data, index) => (
            <TableRow key={index}>
              {/* <TableCell className="font-medium">{data.coin}</TableCell> */}
              <TableCell>{data.name}</TableCell>
              <TableCell>{data.description}</TableCell>
              <TableCell>{data.category}</TableCell>
              <TableCell className="text-right">{data.estimateValue}</TableCell>
              <TableCell className="text-right flex justify-end gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M8 3.15946V13.8261"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.6665 8.4928H13.3332"
                    stroke="#FEFEFE"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="17"
                  viewBox="0 0 16 17"
                  fill="none"
                >
                  <path
                    d="M13 4.15946L12.5869 10.8429C12.4813 12.5504 12.4285 13.4042 12.0005 14.0181C11.7889 14.3215 11.5165 14.5777 11.2005 14.7701C10.5614 15.1595 9.706 15.1595 7.99513 15.1595C6.28208 15.1595 5.42553 15.1595 4.78603 14.7694C4.46987 14.5766 4.19733 14.32 3.98579 14.016C3.55792 13.4012 3.5063 12.5462 3.40307 10.8363L3 4.15946"
                    stroke="#ED3556"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2 4.15947H14M10.7038 4.15947L10.2487 3.22062C9.9464 2.59697 9.7952 2.28515 9.53447 2.09067C9.47667 2.04753 9.4154 2.00916 9.35133 1.97593C9.0626 1.82613 8.71607 1.82613 8.023 1.82613C7.31253 1.82613 6.95733 1.82613 6.66379 1.98221C6.59873 2.01681 6.53665 2.05673 6.47819 2.10158C6.21443 2.30393 6.06709 2.62717 5.77241 3.27364L5.36861 4.15947"
                    stroke="#ED3556"
                    stroke-linecap="round"
                  />
                </svg>
              </TableCell>

              {/* <TableCell className="text-right">{data.coin}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default NonCryptoAssets;
