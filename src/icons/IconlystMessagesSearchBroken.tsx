import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSearchBroken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.566 21.783c-.809-.003-4.205-.001-6.524 0h-.53a.854.854 0 0 1-.707-1.33c.214-.32.485-.708.7-1.01a.95.95 0 0 0 .048-1.023c-.326-.567-.812-1.43-.938-1.743a8.89 8.89 0 0 1-.046-7.33M6.378 6.72a8.78 8.78 0 0 1 13.139.793 8.7 8.7 0 0 1 1.719 3.843M9.197 10.922h4.695m-4.695 3.525h2.027M18.129 14.38a2.993 2.993 0 0 1 2.987 2.999 2.994 2.994 0 0 1-2.987 2.999 2.994 2.994 0 0 1-2.988-3c0-.763.284-1.46.754-1.99M20.162 19.576l1.639 1.641"
    />
  </Svg>
);
export default IconlystMessagesSearchBroken;
