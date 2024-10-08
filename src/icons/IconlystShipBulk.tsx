import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShipBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.287 8.976a.303.303 0 0 0 .364-.296V6.844a.846.846 0 0 0-.605-.82 17.5 17.5 0 0 0-10.084-.002.85.85 0 0 0-.62.822v1.842c0 .192.177.334.364.296a26.5 26.5 0 0 1 10.581-.006M21.19 20.188c-.328-.238-.793-.575-1.548-.692l-.049-.01a.8.8 0 0 0-.28-.029l-.05.002-.187-.005c-1.118 0-1.712.44-2.189.793-.405.3-.672.497-1.296.497-.623 0-.89-.197-1.295-.497-.476-.352-1.069-.793-2.186-.793-1.118 0-1.71.44-2.188.793-.404.3-.67.497-1.294.497-.623 0-.889-.197-1.294-.497-.477-.352-1.07-.793-2.187-.793-1.127 0-1.722.444-2.2.802l-.139.102a.75.75 0 1 0 .883 1.213l.153-.114c.407-.303.674-.503 1.303-.503.622 0 .89.198 1.294.498.477.353 1.07.792 2.187.792 1.118 0 1.71-.439 2.187-.791.405-.3.672-.498 1.295-.498s.89.198 1.294.498c.476.352 1.07.791 2.187.791 1.12 0 1.712-.439 2.19-.791.404-.3.671-.498 1.295-.498.616 0 .903.208 1.235.448a.749.749 0 1 0 .88-1.215"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.636 4.48a.304.304 0 0 0 .349-.3V3.34c0-.322-.198-.604-.537-.729a8.57 8.57 0 0 0-4.935.01.765.765 0 0 0-.506.719v.84c0 .186.166.327.349.3a18.5 18.5 0 0 1 5.28.001"
      clipRule="evenodd"
      opacity={0.4}
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M3.81 18.072c.038.185.235.288.416.237.262-.074.563-.122.921-.122 1.117 0 1.71.44 2.187.792.404.3.671.498 1.294.498.622 0 .89-.198 1.294-.498.291-.214.634-.456 1.106-.615a.32.32 0 0 0 .223-.299V9.763c0-.169-.14-.305-.309-.298-2.67.11-5.33.619-7.878 1.567a.825.825 0 0 0-.5.922zM12.752 18a.32.32 0 0 0 .245.305c.577.151.97.43 1.3.674.404.3.672.498 1.295.498.624 0 .89-.198 1.296-.498.476-.353 1.07-.792 2.188-.792q.093 0 .184.005.027 0 .055-.002a.8.8 0 0 1 .275.027q.026.008.052.012.088.015.171.032c.175.037.354-.067.39-.242l1.236-6.065a.83.83 0 0 0-.515-.928 25.5 25.5 0 0 0-7.864-1.56.297.297 0 0 0-.308.297z" />
    </G>
  </Svg>
);
export default IconlystShipBulk;
