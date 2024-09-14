import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThermometerOutline = ({
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
      d="M17.97 13.908a1.89 1.89 0 0 1-1.339-.554L10.907 7.63a1.893 1.893 0 0 1 0-2.68 2.415 2.415 0 0 1 2.732-.444l.987-.987a4.32 4.32 0 0 1 6.3.194 4.406 4.406 0 0 1-.289 6.024l-.885.886a2.37 2.37 0 0 1-.445 2.731 1.9 1.9 0 0 1-1.336.554m-5.39-8.15a.86.86 0 0 0-.612.253.39.39 0 0 0 0 .557l5.724 5.726a.4.4 0 0 0 .561 0 .87.87 0 0 0 0-1.226.75.75 0 0 1 0-1.06l1.329-1.33a2.943 2.943 0 0 0 .227-3.97 2.89 2.89 0 0 0-4.12-.127l-1.432 1.432a.75.75 0 0 1-1.061 0 .87.87 0 0 0-.614-.255z"
    />
    <Path
      fill={props.color}
      d="M5.005 21.75a2.49 2.49 0 0 1-1.759-4.25l1.08-1.08a1.03 1.03 0 0 0 .288-.6l.187-1.581a2.5 2.5 0 0 1 .716-1.476L11.31 6.97a.75.75 0 0 1 1.06 1.06l-5.79 5.79a1 1 0 0 0-.288.594L6.101 16a2.53 2.53 0 0 1-.715 1.477l-1.08 1.08a.99.99 0 1 0 1.4 1.4l1.078-1.078a2.5 2.5 0 0 1 1.48-.717l1.582-.188a1 1 0 0 0 .59-.287l5.793-5.793a.75.75 0 0 1 1.061 1.06l-5.79 5.792c-.399.398-.918.65-1.477.718l-1.585.188a1 1 0 0 0-.592.286l-1.08 1.08a2.5 2.5 0 0 1-1.76.73"
    />
    <Path
      fill={props.color}
      d="M12.219 17.716a.75.75 0 0 1-.531-.22l-1.648-1.648a.75.75 0 1 1 1.06-1.06l1.649 1.647a.75.75 0 0 1-.53 1.281M14.346 15.589a.74.74 0 0 1-.531-.22l-1.648-1.649a.75.75 0 0 1 1.06-1.06l1.649 1.649a.75.75 0 0 1-.53 1.28"
    />
  </Svg>
);
export default IconlystThermometerOutline;
