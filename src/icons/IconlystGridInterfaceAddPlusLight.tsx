import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGridInterfaceAddPlusLight = ({
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
      d="M5.016 13.844a1.98 1.98 0 0 0-1.907 1.766 14.5 14.5 0 0 0 0 3.546 1.966 1.966 0 0 0 1.907 1.772 18 18 0 0 0 3.205 0 1.97 1.97 0 0 0 1.907-1.772 14.5 14.5 0 0 0 0-3.545A1.956 1.956 0 0 0 8.22 13.84a18 18 0 0 0-3.205.004"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.382 14.229v6.312m-3.155-3.157h6.312"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.016 3.072a1.98 1.98 0 0 0-1.907 1.77 14.5 14.5 0 0 0 0 3.546c.1.985.917 1.742 1.907 1.766 1.066.098 2.139.098 3.205 0a1.965 1.965 0 0 0 1.907-1.766 14.5 14.5 0 0 0 0-3.546 1.955 1.955 0 0 0-1.907-1.77 18 18 0 0 0-3.205 0M15.78 3.072a1.98 1.98 0 0 0-1.908 1.77 14.5 14.5 0 0 0 0 3.546c.1.985.917 1.742 1.907 1.766 1.066.098 2.14.098 3.205 0a1.963 1.963 0 0 0 1.906-1.766 14.4 14.4 0 0 0 0-3.546 1.955 1.955 0 0 0-1.906-1.77 18 18 0 0 0-3.205 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGridInterfaceAddPlusLight;
