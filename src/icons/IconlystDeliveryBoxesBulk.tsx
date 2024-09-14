import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDeliveryBoxesBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M14.623 4.77a.76.76 0 0 1 .467 0l.95.31-.009-3.072-2.377.01.004 3.07z" />
      <Path d="M21.49 5.929c-.01-2.35-1.52-3.93-3.78-3.93h-.18l.01 4.11c0 .24-.11.47-.31.61a.76.76 0 0 1-.67.11l-1.7-.56-1.72.57c-.07.02-.15.03-.23.03a.748.748 0 0 1-.75-.74l-.01-4.11h-.19c-1.07 0-1.99.36-2.67 1.04-.71.71-1.1 1.74-1.09 2.91l.01 2.68q.001.073.023.143c.022.069.091.106.163.106l3.164-.01h.03c1.31 0 2.51.48 3.37 1.34.92.9 1.42 2.19 1.42 3.61l.01 4.68q.001.558-.103 1.09a.208.208 0 0 0 .2.25h1.253c1.07 0 1.99-.35 2.67-1.03.7-.71 1.09-1.74 1.09-2.91z" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m8.94 12.708.681.225-.005-2.34a.2.2 0 0 0-.2-.199l-1.445.003a.2.2 0 0 0-.2.2l.004 2.343.693-.231a.75.75 0 0 1 .472-.001"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.654 19.27h-1.82a.75.75 0 0 1 0-1.5h1.82a.75.75 0 0 1 0 1.5m6.254-7.98c-.594-.588-1.398-.9-2.324-.9h-.025l-.244.001a.2.2 0 0 0-.2.2l.009 3.378a.75.75 0 0 1-.985.714l-1.432-.472-1.444.48a.74.74 0 0 1-.675-.101.75.75 0 0 1-.312-.608L6.271 10.6a.2.2 0 0 0-.2-.2h-.265c-.937 0-1.747.316-2.342.913-.624.626-.966 1.535-.964 2.559l.01 4.67C2.516 20.61 3.851 22 5.835 22l5.75-.02c.941 0 1.753-.316 2.348-.913.622-.624.963-1.528.96-2.548l-.01-4.68c-.002-1.022-.348-1.927-.975-2.55"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDeliveryBoxesBulk;
