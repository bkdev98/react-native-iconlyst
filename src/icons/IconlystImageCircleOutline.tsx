import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystImageCircleOutline = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M9.493 9.074a.905.905 0 1 0 .905.905v-.001a.905.905 0 0 0-.905-.904m-2.404.905a2.405 2.405 0 0 1 4.809-.002v.002a2.404 2.404 0 0 1-4.81 0M13.696 16.665c-.404.405-.96.813-1.676.813-.541 0-1.042-.139-1.474-.295a13 13 0 0 1-.621-.247l-.09-.037a17 17 0 0 0-.462-.19c-.704-.272-1.044-.282-1.362-.03a13.3 13.3 0 0 0-1.672 1.949.75.75 0 1 1-1.228-.861 14.8 14.8 0 0 1 1.927-2.23c1.009-.833 2.09-.53 2.876-.227.17.066.344.139.507.207l.084.036c.192.08.373.155.552.22.36.13.672.205.963.205.116 0 .308-.066.614-.373.302-.302.6-.719.948-1.209l.005-.006c.327-.46.704-.99 1.122-1.4s.986-.806 1.709-.806c1.101 0 2.089.54 2.852 1.11.702.525 1.301 1.141 1.705 1.557l.111.114.007.007a.75.75 0 0 1-1.06 1.06l-.017-.015-.113-.116c-.41-.422-.93-.955-1.53-1.404-.668-.498-1.335-.813-1.955-.813-.144 0-.351.077-.66.379-.306.3-.607.716-.954 1.203l-.037.052c-.317.446-.678.953-1.07 1.347"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.25 3.75a8.25 8.25 0 1 0 0 16.5 8.25 8.25 0 0 0 0-16.5M2.5 12c0-5.384 4.365-9.75 9.75-9.75S22 6.616 22 12a9.75 9.75 0 0 1-9.75 9.75A9.75 9.75 0 0 1 2.5 12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystImageCircleOutline;
