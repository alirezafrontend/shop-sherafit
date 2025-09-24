"use client";

import { Grid3x3, LayoutGrid, Square } from "lucide-react";
import SelectedFilter from "./SelectedFilter";
import { useDispatch, useSelector } from "react-redux";
import {
  changerGridMd,
  changerGridLg,
  changerGrid,
} from "@/features/pageGrid/PageGridSlice";
import { RootState } from "@/app/store";

export default function ShopHeader({ className }: { className: string }) {
  const dispatch = useDispatch();
  const gridLg = useSelector((state: RootState) => state.pageGrid.gridLg);
  const gridMd = useSelector((state: RootState) => state.pageGrid.gridMd);
  const grid = useSelector((state: RootState) => state.pageGrid.grid);

  return (
    <section
      className={`w-full h-[62px] border border-[#d7d7d7] bg-white ${className}`}
    >
        <div className="w-full h-full flex items-center">
          <div className="w-4/12 md:w-4/18 lg:w-2/18 flex justify-center items-center">
            <div className="gap-2 hidden lg:flex">
              <LayoutGrid
                className={`${
                  gridLg === 2 ? "text-[#6A6A6A ]" : "text-[#c1c1c1]"
                } cursor-pointer`}
                onClick={() => dispatch(changerGridLg(2))}
              />
              <Grid3x3
                className={`${
                  gridLg === 4 ? "text-[#6A6A6A ]" : "text-[#c1c1c1]"
                } cursor-pointer`}
                onClick={() => dispatch(changerGridLg(4))}
              />
            </div>
            <div className="gap-2 hidden md:flex lg:hidden">
              <Square
                className={`${
                  gridMd === 1 ? "text-[#6A6A6A ]" : "text-[#c1c1c1]"
                } cursor-pointer`}
                onClick={() => dispatch(changerGridMd(1))}
              />
              <LayoutGrid
                className={`${
                  gridMd === 2 ? "text-[#6A6A6A ]" : "text-[#c1c1c1]"
                } cursor-pointer`}
                onClick={() => dispatch(changerGridMd(2))}
              />
            </div>
            <div className="gap-2 flex md:hidden">
              <Square
                className={`${
                  grid === 1 ? "text-[#6A6A6A ]" : "text-[#c1c1c1]"
                } cursor-pointer`}
                onClick={() => dispatch(changerGrid(1))}
              />
              <LayoutGrid
                className={`${
                  grid === 2 ? "text-[#6A6A6A ]" : "text-[#c1c1c1]"
                } cursor-pointer`}
                onClick={() => dispatch(changerGrid(2))}
              />
            </div>
          </div>
          <div className="flex items-center px-5 w-4/12 md:w-10/18 lg:w-14/18 border-x border-[#d7d7d7] h-full">
            <span>فروشگاه</span>
          </div>
          <div className="w-4/12 md:w-4/18 lg:w-2/18 h-full">
            <SelectedFilter />
          </div>
        </div>
    </section>
  );
}
