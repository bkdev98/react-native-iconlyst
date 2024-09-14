import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCardsLikeBroken = ({
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
      d="m20.295 15.944-.303 2.365c-.228 1.776-1.495 2.89-3.273 2.662l-5.086-.653c-1.777-.228-2.722-1.624-2.494-3.4l1.212-9.462c.228-1.776 1.5-2.889 3.273-2.661l5.086.652c1.777.228 2.723 1.625 2.495 3.4l-.53 4.13"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.05 4.84c-.527-1.271-1.694-2.006-3.21-1.808l-5.424.688c-1.902.244-2.91 1.741-2.665 3.625l.323 2.526M10.606 20.01l-2.071.274c-1.902.244-3.249-.942-3.494-2.835l-.512-4.008"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.046 11.892c-.11-.918.406-1.845 1.37-1.96.507-.06 1.012.129 1.356.508a1.59 1.59 0 0 1 1.444.036c.85.467.985 1.52.54 2.33-.697 1.287-2.826 1.969-2.826 1.969s-1.707-1.41-1.884-2.883"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystCardsLikeBroken;
