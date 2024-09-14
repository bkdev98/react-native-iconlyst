import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystUserSearchBold = ({
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
      d="M16.824 15.315c-.355 0-.71.133-.979.404a1.39 1.39 0 0 0 0 1.963c.538.539 1.42.538 1.964-.002a1.39 1.39 0 0 0 0-1.961 1.4 1.4 0 0 0-.985-.404m2.983 5.365a1 1 0 0 1-.708-.293l-.69-.692a3.4 3.4 0 0 1-3.98-.6 3.397 3.397 0 0 1 0-4.788 3.4 3.4 0 0 1 4.791-.005 3.4 3.4 0 0 1 .603 3.98l.692.692a1 1 0 0 1-.708 1.706M10.705 3.25A4.88 4.88 0 0 0 5.83 8.125a4.88 4.88 0 0 0 4.875 4.876 4.88 4.88 0 0 0 4.875-4.876 4.88 4.88 0 0 0-4.875-4.875M10.703 14.522c-4.98 0-7.21 2.75-7.21 5.48a.75.75 0 0 0 .75.75l5.81-.01 1.177-.002q.157-.004.305-.053c.425-.122.7-.47.7-.965V15.54c0-.611-.444-1.018-1.532-1.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystUserSearchBold;
