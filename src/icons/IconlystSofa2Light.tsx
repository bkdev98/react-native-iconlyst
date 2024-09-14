import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa2Light = ({
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
      d="M18.922 10.629c-.503-.001-.755-.002-.96.057a1.5 1.5 0 0 0-1.026 1.025c-.06.204-.06.454-.06.955v.911c0 .583-.471 1.055-1.054 1.055H8.185a1.055 1.055 0 0 1-1.055-1.055v-.893c0-.52 0-.78-.062-.99a1.5 1.5 0 0 0-1.007-1.008c-.21-.062-.471-.063-.994-.063-.514 0-.772-.001-.984.063a1.51 1.51 0 0 0-1.01 1.022c-.06.212-.057.466-.05.974.013 1.016.036 2.112.075 2.529a3.63 3.63 0 0 0 3.35 3.302c.831.13 4.159.13 5.546.13s5.076-.029 5.558-.132a3.625 3.625 0 0 0 3.339-3.3c.04-.413.066-1.501.083-2.515.008-.504.012-.756-.045-.962a1.5 1.5 0 0 0-1.023-1.043c-.206-.06-.465-.061-.984-.062"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.08 18.7v1.776M16.193 18.7v1.776M18.962 10.596V8.174c0-1.342 0-2.012-.21-2.544a3 3 0 0 0-1.686-1.685c-.532-.211-1.202-.211-2.544-.211H9.544c-1.342 0-2.013 0-2.545.21A3 3 0 0 0 5.314 5.63c-.21.532-.21 1.202-.21 2.544v2.422"
    />
  </Svg>
);
export default IconlystSofa2Light;
