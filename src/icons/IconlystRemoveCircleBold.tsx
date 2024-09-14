import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystRemoveCircleBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M14.866 14.864a.75.75 0 0 1-1.061 0l-1.806-1.807-1.801 1.801a.75.75 0 0 1-1.061-1.06l1.801-1.801-1.802-1.803a.749.749 0 1 1 1.06-1.06l1.802 1.802L13.8 9.135a.749.749 0 1 1 1.06 1.06l-1.801 1.802 1.807 1.806a.75.75 0 0 1 0 1.061M12 2.5c-5.238 0-9.5 4.261-9.5 9.5s4.262 9.5 9.5 9.5 9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystRemoveCircleBold;
