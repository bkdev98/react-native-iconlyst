import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBookmarkOutline = ({
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
      d="M7.922 2.25h8.546c1.66 0 3.062.59 4.046 1.648C21.492 4.948 22 6.4 22 8.028v7.946c0 1.627-.508 3.078-1.487 4.128-.984 1.057-2.386 1.648-4.046 1.648H8.033l-.222-.004c-1.562-.05-2.884-.634-3.824-1.644-.978-1.05-1.487-2.5-1.487-4.128V8.027c0-1.628.511-3.08 1.49-4.13.941-1.008 2.262-1.593 3.821-1.643a1 1 0 0 1 .11-.003m-.787 1.58c-.856.159-1.541.548-2.047 1.09C4.41 5.647 4 6.71 4 8.027v7.947c0 1.317.409 2.38 1.085 3.106.505.543 1.191.932 2.05 1.09zm1.5 16.42V3.75h2.603v7.75a.75.75 0 0 0 1.085.67l2.144-1.072 2.126 1.072a.75.75 0 0 0 1.087-.67l-.001-7.6a3.6 3.6 0 0 1 1.737 1.02c.675.726 1.084 1.789 1.084 3.107v7.947c0 1.317-.409 2.38-1.085 3.106-.67.72-1.659 1.17-2.948 1.17zm7.544-16.5h-3.441v6.536l1.394-.697a.75.75 0 0 1 .673 0l1.375.693z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystBookmarkOutline;
