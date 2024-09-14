import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVkBold = ({ title, titleId, ...props }: SvgProps & SVGRProps) => (
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.519 14.257c-.678-.747-1.37-1.314-2.091-1.747a9 9 0 0 0 2.099-1.758 16 16 0 0 0 2.37-3.583 1 1 0 1 0-1.795-.881 14 14 0 0 1-2.068 3.133c-.801.892-1.607 1.477-2.457 1.784-.68.239-1.405.288-2.024.304-.016 0-.028.009-.043.01h-.123V6.738a1 1 0 0 0-1-1H10.08a1 1 0 1 0 0 2h1.307v9.46C5.797 16.396 4 8.935 4 6.738a1 1 0 1 0-2 0c0 3.212 2.558 12.53 10.387 12.53a1 1 0 0 0 1-1v-4.75h.179c.856.01 1.457.099 2.004.292.844.304 1.65.89 2.46 1.783.795.894 1.492 1.95 2.072 3.136a1 1 0 0 0 1.796-.88 16 16 0 0 0-2.38-3.592"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVkBold;
