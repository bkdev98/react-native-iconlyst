import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceAddPlusBroken = ({
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
      d="M3.609 15.61a1.98 1.98 0 0 1 1.907-1.766 18 18 0 0 1 3.205-.004c.993.02 1.813.782 1.907 1.77a14.5 14.5 0 0 1 0 3.546 1.97 1.97 0 0 1-1.907 1.772 18 18 0 0 1-3.205 0 1.966 1.966 0 0 1-1.907-1.772M17.882 14.229v6.312m-3.155-3.157h6.312M5.516 3.072a1.98 1.98 0 0 0-1.907 1.77 14.5 14.5 0 0 0 0 3.546c.1.985.917 1.742 1.907 1.766 1.066.098 2.139.098 3.205 0a1.965 1.965 0 0 0 1.907-1.766 14.5 14.5 0 0 0 0-3.546 1.955 1.955 0 0 0-1.907-1.77M21.39 8.388a1.963 1.963 0 0 1-1.906 1.766 17.5 17.5 0 0 1-3.205 0 1.965 1.965 0 0 1-1.907-1.766 14.5 14.5 0 0 1 0-3.546 1.98 1.98 0 0 1 1.907-1.77 18 18 0 0 1 3.205 0c.992.02 1.813.782 1.906 1.77"
    />
  </Svg>
);
export default IconlystGridInterfaceAddPlusBroken;
