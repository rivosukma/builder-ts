interface IList {
  id: string;
  label: string;
  icon: string;
}

const useSidebar = () => {
  const mapList = (lists: IList[]) =>
    lists.map((list: IList, i: number) => (
      <li key={i} className="collapse hover:text-primary">
        <input type="checkbox" className="peer" />
        <div className="collapse-title flex items-center peer-checked:text-white peer-checked:bg-primary px-10">
          <i className={list.icon} />
          <span className="ml-3">{list.label}</span>
        </div>
        <div id={list.id} className="collapse-content p-0" />
      </li>
    ));

  return { mapList };
};
export default useSidebar;
