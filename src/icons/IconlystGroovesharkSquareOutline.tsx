import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystGroovesharkSquareOutline = ({
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
      d="M16.225 21.75h-8.43c-3.31 0-5.53-2.32-5.53-5.78V8.02c0-3.45 2.22-5.77 5.53-5.77h8.43c3.31 0 5.53 2.32 5.53 5.77v7.95c0 3.46-2.22 5.78-5.53 5.78m-8.43-18c-2.45 0-4.03 1.68-4.03 4.27v7.95c0 2.6 1.58 4.28 4.03 4.28h8.43c2.45 0 4.03-1.68 4.03-4.28V8.02c0-2.59-1.58-4.27-4.03-4.27z"
    />
    <Path
      fill={props.color}
      d="M18.785 15.482c-2.48 0-3.5-2.21-4.25-3.82q-.18-.39-.36-.75c-.81-1.61-2.56-2.55-4.31-2.41.18 1.68-.2 3.92-1.37 5.43-.79 1.02-1.85 1.56-3.05 1.56a3.21 3.21 0 0 1-3.2-3.2v-3.55c0-.41.34-.75.75-.75s.75.34.75.75v3.55c0 .94.76 1.7 1.7 1.7.73 0 1.36-.33 1.87-.98 1.03-1.31 1.3-3.59.96-4.94-.05-.19-.02-.4.08-.57s.27-.29.46-.34c2.7-.67 5.45.6 6.69 3.08.13.25.25.52.38.79.82 1.78 1.47 2.95 2.89 2.95.81 0 1.47-.66 1.47-1.47v-3.78c0-.41.34-.75.75-.75s.75.34.75.75v3.78a2.97 2.97 0 0 1-2.97 2.97z"
    />
  </Svg>
);
export default IconlystGroovesharkSquareOutline;
