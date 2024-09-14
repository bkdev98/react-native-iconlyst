import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTowel1Bold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M17.1 17.46V5.62c0-.75-.42-1.37-1.11-1.87h3.97l.02 13.71zm-5.61.45c-.42 0-.75-.33-.75-.75v-1.09a.749.749 0 1 1 1.5 0v1.09c0 .42-.34.75-.75.75m0-7.29c-.42 0-.75-.33-.75-.75v-2.1a.306.306 0 0 0-.32-.303q-.299.013-.61.013c-3.75 0-5.79-1.22-5.79-1.86 0-.74 2.31-1.87 5.79-1.87s5.79 1.13 5.79 1.87c0 .461-1.081 1.237-3.11 1.625a.306.306 0 0 0-.25.299V9.87c0 .42-.34.75-.75.75m-.75 1.76a.749.749 0 1 1 1.5 0v1.13c0 .42-.34.75-.75.75-.42 0-.75-.33-.75-.75zM21.46 3c0-.41-.33-.75-.75-.75h-10.5c-.01 0-.03 0-.04.01-.12-.01-.24-.01-.36-.01-3.62 0-7.29 1.16-7.29 3.37v12.77c0 2.21 3.67 3.36 7.29 3.36q.32-.001.64-.01a.3.3 0 0 0 .29-.3v-1.97a.749.749 0 1 1 1.5 0v1.752c0 .183.163.324.344.293 2.198-.383 4.018-1.243 4.436-2.555h3.71c.2 0 .39-.07.53-.22a.75.75 0 0 0 .22-.53z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M10.75 4.74c-.62.18-1.23.17-1.86 0a.763.763 0 0 0-.93.52c-.03.12-.03.24-.01.36.06.27.27.49.54.57a5.015 5.015 0 0 0 2.66 0c.27-.08.47-.31.53-.57.03-.11.02-.24-.01-.36a.745.745 0 0 0-.92-.52"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTowel1Bold;
