import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSendLove2Broken = ({
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
      d="M11.196 16.95h1.413c1.009 0 1.823-.726 1.823-1.734 0-.839-.567-1.509-1.38-1.713-1.163-.292-2.324-.52-3.538-.492-1.924.047-3.27 1.119-4.795 2.14"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.196 16.982c.715-.104 1.442 0 2.163-.016 1.674-.04 2.985-1.455 4.259-2.414a1.63 1.63 0 0 1 2.138.153c.639.64.639 1.681 0 2.322-1.376 1.38-2.591 2.663-4.456 3.388M4.717 20.202c1.026 0 1.96.012 2.975.213 1.797.355 3.492.696 5.214.551M14.468 10.035s-3.009-1.406-3.68-3.554c-.433-1.355.075-2.905 1.495-3.366a2.45 2.45 0 0 1 1.136-.078c.38.065.74.326 1.05.556.308-.232.667-.495 1.047-.559s.77-.037 1.137.08c1.42.458 1.925 2.012 1.49 3.367-.238.727-.728 1.366-1.275 1.894"
    />
  </Svg>
);
export default IconlystSendLove2Broken;
