import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoins2Light = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.524 15.084c0 1.188-1.866 2.152-4.17 2.152-2.301 0-4.167-.964-4.167-2.152"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.523 11.32v7.528c0 1.188-1.866 2.152-4.17 2.152-2.301 0-4.167-.964-4.167-2.152V11.32"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.523 11.32c0 1.188-1.866 2.153-4.17 2.153-2.301 0-4.167-.965-4.167-2.153s1.866-2.152 4.168-2.152 4.17.963 4.17 2.152"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.646 11.068c-2.302 0-4.17-.963-4.17-2.152M9.646 14.832c-2.302 0-4.17-.963-4.17-2.152"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m5.478 5.152-.001 11.292c0 1.189 1.867 2.152 4.169 2.152M13.815 5.152V9.17"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.814 5.152c0 1.188-1.866 2.152-4.17 2.152-2.301 0-4.167-.964-4.167-2.152S7.343 3 9.645 3s4.17.963 4.17 2.152"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCoins2Light;
