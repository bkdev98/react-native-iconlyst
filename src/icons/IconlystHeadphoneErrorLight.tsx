import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHeadphoneErrorLight = ({
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
      d="M11.998 9.264v3.092M12.002 14.764v-.01"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M5.169 19.132a1.884 1.884 0 0 0 3.263-1.882l-1.583-2.743c-.52-.9-1.67-1.21-2.571-.69l-.223.127c-.565.326-.85.997-.657 1.621.343 1.111.932 2.307 1.77 3.567M18.838 19.132a1.884 1.884 0 0 1-3.263-1.882l1.582-2.743c.52-.9 1.671-1.21 2.573-.69l.22.127c.566.326.851.997.658 1.621-.343 1.111-.931 2.307-1.77 3.567"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.227 16.57A9 9 0 0 0 21 12.922c0-4.97-4.035-8.996-9.004-8.996C7.034 3.926 3 7.953 3 12.922c0 1.128.208 2.211.588 3.2"
    />
  </Svg>
);
export default IconlystHeadphoneErrorLight;
