import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGumroadBold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M21.915 13.168a.74.74 0 0 0-.704-.522h-7.928a.75.75 0 0 0 0 1.5h3.632c-.213 1.651-1.577 3.198-3.24 3.561-1.158.26-2.423-.026-3.307-.749-2.224-1.809-2.632-5.579-.854-7.909 1.074-1.406 2.904-2.049 4.549-1.6 1.45.392 1.974 1.486 2.506 2.876.075.193.26.321.467.321h4.44a.5.5 0 0 0 .499-.457c.015-.179-.107-1.01-.156-1.209-1.261-4.859-6.754-6.71-11.333-5.702-3.395.743-6.043 3.214-6.913 6.448-1.013 3.778-.26 8.93 3.789 11.312 1.096.642 2.449.966 3.809.966 1.227 0 2.459-.263 3.516-.795a5.9 5.9 0 0 0 2.279-1.98v1.997a.5.5 0 0 0 .5.5h4.01a.5.5 0 0 0 .5-.5v-7.83a.5.5 0 0 0-.061-.228"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystGumroadBold;
