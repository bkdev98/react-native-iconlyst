import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystLaptopAiTwoTone = ({
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
      d="M17.024 3.987a2.435 2.435 0 0 1 2.436 2.435v8.005l1.426 3.103a1.847 1.847 0 0 1-1.735 2.483H4.849a1.848 1.848 0 0 1-1.735-2.483l1.427-3.103V6.422a2.435 2.435 0 0 1 2.436-2.435z"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10.693 17.253h2.616"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.443 14.428H4.56"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.993 10.855-.08-.213a2.94 2.94 0 0 0-1.732-1.736l-.213-.08.213-.078a2.94 2.94 0 0 0 1.733-1.736l.079-.213.078.213c.298.804.93 1.438 1.734 1.736l.213.079-.213.079a2.94 2.94 0 0 0-1.734 1.736zM15.07 11.272a1.32 1.32 0 0 0-.88-.881c.422-.129.752-.459.88-.88.128.421.458.751.88.88a1.32 1.32 0 0 0-.88.88"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystLaptopAiTwoTone;
