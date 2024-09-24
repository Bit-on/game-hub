import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

import useGameQueryStore from "../store";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

const PlatformSelector = () => {
  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);

  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatform(selectedPlatformId);
  const setSelectedPlatformId = useGameQueryStore((s) => s.setPlatformId);
  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const refreshPage = () => {
    setSearchText("");
  };
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "Platforms"}{" "}
      </MenuButton>
      <MenuList>
        <MenuItem key="0" onClick={refreshPage}>
          All
        </MenuItem>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
