import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFolderFileOpenBroken = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M21.662 18.479a2.41 2.41 0 0 1-2.407 2.408l-13.122-.003a2.41 2.41 0 0 0 2.408-2.41v-4.788c0-2.148 1.33-3.16 2.913-3.16h7.358c1.583 0 2.913 1.012 2.913 3.16v1.667"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.356 10.752V9.704c-.051-2.537-1.615-3.772-4.48-3.772h-1.532a2.12 2.12 0 0 1-1.692-.847l-.847-1.125a2.12 2.12 0 0 0-1.69-.847H8.26c-3.318 0-4.536 1.956-4.536 5.268v1.626M6.133 20.884a2.41 2.41 0 0 1-2.408-2.41v-5.046"
    />
  </Svg>
);
export default IconlystFolderFileOpenBroken;
