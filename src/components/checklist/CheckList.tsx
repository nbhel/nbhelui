import { CheckMarkIcon } from "../../assets/icons";

const CheckList = (props: { title: string }) => {
  return (
    <>
      <ul className="my-5">
        <li className="flex space-x-3">
          <CheckMarkIcon />
          <span className="text-base font-medium leading-tight text-gray-900">
            {props.title}
          </span>
        </li>
      </ul>
    </>
  );
};

export default CheckList;
