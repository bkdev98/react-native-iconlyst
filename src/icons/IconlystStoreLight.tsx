import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStoreLight = ({
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
      d="M5.009 14.168v1.86c0 2.442 1.52 4.167 3.965 4.167h6.991c2.445 0 3.966-1.726 3.966-4.168v-1.859M10.693 15.945h3.527"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M17.775 11.109c1.008.296 2.14.118 2.903-.604.549-.519.882-1.23.772-1.992-.117-.808-.5-2.078-.832-3.095a2.34 2.34 0 0 0-2.223-1.61H6.559c-1.007 0-1.9.643-2.219 1.598-.34 1.019-.732 2.295-.848 3.107-.11.763.222 1.473.77 1.992.763.722 1.897.9 2.905.604l.273-.081c.443-.13.917-.094 1.335.1l2.185 1.012a3.6 3.6 0 0 0 3.021 0l2.185-1.013a1.9 1.9 0 0 1 1.334-.099z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStoreLight;
