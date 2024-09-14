import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSofa2TwoTone = ({
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
      d="M19.423 10.629c-.504-.001-.755-.002-.96.057a1.5 1.5 0 0 0-1.027 1.025c-.059.204-.059.454-.059.955v.911c0 .583-.472 1.055-1.055 1.055H8.686a1.055 1.055 0 0 1-1.055-1.055v-.893c0-.52 0-.78-.063-.99a1.5 1.5 0 0 0-1.006-1.008c-.21-.062-.472-.063-.995-.063-.514 0-.771-.001-.983.063a1.51 1.51 0 0 0-1.01 1.022c-.061.212-.058.466-.051.974.013 1.016.037 2.112.076 2.529a3.63 3.63 0 0 0 3.35 3.302c.83.13 4.158.13 5.546.13s5.076-.029 5.557-.132a3.625 3.625 0 0 0 3.34-3.3c.039-.413.065-1.501.082-2.515.008-.504.012-.756-.044-.962a1.5 1.5 0 0 0-1.024-1.043c-.205-.06-.465-.061-.983-.062"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.58 18.7v1.776M16.693 18.7v1.776M19.462 10.596V8.174c0-1.342 0-2.012-.21-2.544a3 3 0 0 0-1.686-1.685c-.532-.211-1.202-.211-2.544-.211h-4.978c-1.342 0-2.013 0-2.545.21A3 3 0 0 0 5.814 5.63c-.21.532-.21 1.202-.21 2.544v2.422"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystSofa2TwoTone;
