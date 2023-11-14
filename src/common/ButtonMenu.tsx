import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
export default function ButtonMenu({
  title,
  objects,
}: {
  title: string;
  objects: any[];
}) {
  return (
    <>
      <Menu>
        <MenuHandler>
          <Button>{title}</Button>
        </MenuHandler>
        <MenuList>
          {objects.map((object) => {
            return (
              <>
                <MenuItem>{object}</MenuItem>
              </>
            );
          })}
        </MenuList>
      </Menu>
    </>
  );
}
