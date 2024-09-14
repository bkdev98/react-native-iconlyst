import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAnimalGiftLight = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.999 7.443S11.199 3.3 8.396 3.3c-1.105 0-2.001.927-2.001 2.071 0 1.143.896 2.07 2 2.07"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.601 7.443c1.105 0 2.001-.928 2.001-2.07 0-1.145-.896-2.072-2.001-2.072-2.802 0-3.603 4.142-3.603 4.142"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.873 21.3H7.127c-2.15 0-3.486-1.602-3.486-3.871V11.31c0-2.268 1.336-3.87 3.487-3.87h9.745c2.15 0 3.486 1.602 3.486 3.87v6.118c0 2.269-1.344 3.87-3.486 3.87M11.998 7.441l-1.663 2.761M11.998 7.441l1.663 2.761"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.064 12.459v-.04m-.005-.118a.174.174 0 1 0 .002.347.174.174 0 0 0-.002-.347M14.587 13.74v-.04m-.005-.118a.174.174 0 1 0 .002.347.174.174 0 0 0-.002-.347M9.552 13.74v-.04m-.005-.118a.174.174 0 1 0 .002.347.174.174 0 0 0-.002-.347"
    />
    <Path
      stroke={props.color}
      strokeWidth={1.5}
      d="M12.069 17.71c1.057 0 2.397.916 2.378-.494-.008-1.057-1.109-2.049-2.378-2.05-1.277 0-2.545 1.078-2.369 2.177.195 1.275 1.432.367 2.369.367Z"
    />
  </Svg>
);
export default IconlystAnimalGiftLight;
