import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesSecureBold = ({
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
      fill={props.color}
      fillRule="evenodd"
      d="M10.006 10.145c0 .106.005.253.01.465.007.372.018.91.018 1.704 0 1.581 1.652 2.393 2.259 2.638.605-.244 2.26-1.056 2.26-2.638 0-.792.01-1.329.018-1.7.004-.219.01-.369.009-.476-.433-.213-1.977-.75-2.316-.785-.28.034-1.761.551-2.258.792"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.07 10.643c-.006.366-.018.894-.018 1.671 0 3.043-3.397 4.11-3.543 4.154a.733.733 0 0 1-.435 0c-.144-.044-3.54-1.11-3.54-4.154 0-.779-.012-1.308-.019-1.674-.018-.88-.023-1.145.366-1.539.426-.424 2.9-1.248 3.412-1.248.527 0 2.975.811 3.41 1.248.39.396.386.662.367 1.542m3.704-4.35a9.53 9.53 0 0 0-6.92-3.63A9.5 9.5 0 0 0 5.58 5.436c-2.806 2.814-3.572 7.136-1.914 10.73.136.343.613 1.194.99 1.848a.47.47 0 0 1-.024.51 44 44 0 0 0-.722 1.044c-.283.424-.31.967-.07 1.416.24.447.701.723 1.206.723h1.421c2.278 0 5.07-.002 5.8 0h.033a9.5 9.5 0 0 0 7.272-3.397c2.897-3.437 2.982-8.49.203-12.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystMessagesSecureBold;
