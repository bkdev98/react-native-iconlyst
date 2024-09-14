import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserCheckedBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M19.807 14.74a.98.98 0 0 0-1.42 0l-2.738 2.738-.912-.913a.98.98 0 0 0-1.42 0 .98.98 0 0 0 0 1.42l1.622 1.724c.203.203.406.304.71.304s.507-.101.71-.304l3.448-3.448c.406-.507.406-1.115 0-1.521M15.954 7.843c.1-2.535-2.028-4.665-4.665-4.665a4.653 4.653 0 0 0-4.665 4.665 4.653 4.653 0 0 0 4.665 4.665 4.653 4.653 0 0 0 4.665-4.665M10.274 14.537c-1.42 0-2.738.203-3.752.507-.61.203-1.217.507-1.623.913a2.45 2.45 0 0 0-.71 1.724c0 .71.203 1.217.71 1.724.406.405 1.014.71 1.623.912 1.014.305 2.332.507 3.752.507.608 0 1.014-.405 1.014-1.014v-4.259c0-.608-.406-1.014-1.014-1.014"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserCheckedBold;
