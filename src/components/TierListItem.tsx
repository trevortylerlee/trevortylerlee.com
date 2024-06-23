import {
  Popover,
  PopoverButton,
  PopoverPanel,
  Transition,
} from "@headlessui/react";
import { type TierListItemType } from "./TierList.astro";

export default function TierListItem({ data }: { data: TierListItemType }) {
  return (
    <Popover className="not-prose">
      <PopoverButton className="grid h-16 w-16 cursor-pointer place-content-center border-none outline-none data-[focus]:ring-2 data-[focus]:ring-blue-500 sm:h-24 sm:w-24">
        <img src={data.image} alt={data.name} />
      </PopoverButton>
      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          anchor="top start"
          className="rounded-xl border-solid bg-white text-sm/6 [--anchor-gap:4px] dark:border-2 dark:border-neutral-700 dark:bg-neutral-900 sm:[--anchor-gap:6px]"
        >
          <div className="rounded p-3">
            <p>{data.name}</p>
            <p className="text-textVariant"></p>
          </div>
        </PopoverPanel>
      </Transition>
    </Popover>
  );
}
