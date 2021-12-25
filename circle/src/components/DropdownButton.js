import React, { useState, useRef, useCallback } from "react";
import { Manager, Reference, Popper } from "react-popper";

const DropdownButton = ({ buttonText, options }) => {
  const [dropdownOpen, setDropdownToggle] = useState(false);
  const dropdownListRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  const setButtonRef = useCallback((node, ref) => {
    dropdownButtonRef.current = node;
    return ref(node);
  }, []);

  const setListRef = useCallback((node, ref) => {
    dropdownListRef.current = node;
    return ref(node);
  }, []);

  const dropdownToggle = () => {
    setDropdownToggle(!dropdownOpen);
  };

  const filterTags = () => {

  };

  return (
    <Manager>
      <div>
        <Reference>
          {({ ref }) => (
            <button
              class="filterButton"
              onClick={dropdownToggle}
              ref={node => setButtonRef(node, ref)}
            >
              {buttonText}
            </button>
          )}
        </Reference>
        {dropdownOpen && (
          <Popper placement="bottom-end" >
            {({ ref, style, placement }) => (
              <ul
                ref={node => setListRef(node, ref)}
                style={style}
                data-placement={placement}
                className="dropdown"
              >
                {options.map(item => {
                  return (
                    <button
                    class="tagsOption"
                    onClick={filterTags}
                    > {item.label} </button>
                  );
                })}
              </ul>
            )}
          </Popper>
        )}
      </div>
    </Manager>
  );
};

export default DropdownButton;
