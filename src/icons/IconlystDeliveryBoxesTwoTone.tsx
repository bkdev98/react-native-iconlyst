import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxesTwoTone = ({
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
      d="m6.308 9.839 5.753-.012c1.736-.004 2.819 1.218 2.823 2.952l.01 4.679c.004 1.734-1.072 2.96-2.809 2.966l-5.752.011c-1.736.004-2.817-1.218-2.822-2.953L3.5 12.804c-.004-1.733 1.078-2.961 2.808-2.965"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.334 17.458h1.82M10.865 9.827l.01 3.59-1.67-.544-1.679.554-.005-3.585"
      opacity={0.4}
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m12.086 20.435 6.156-.014c2.014-.005 3.263-1.428 3.258-3.44l-.013-9.992c-.004-2.011-1.26-3.429-3.273-3.424l-5.76.014c-2.007.004-3.262 1.428-3.257 3.439l.013 2.686"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m17.282 3.565.011 4.113-1.936-.63-1.947.641-.006-4.107"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystDeliveryBoxesTwoTone;
