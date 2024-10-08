import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFirefoxOutline = ({
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
      d="M13.556 2.605c1.255.188 2.58.62 3.66 1.292l.007.005A9.688 9.688 0 1 1 3.42 7.562a.75.75 0 0 1 1.329.696 8.188 8.188 0 1 0 11.67-3.09c-.871-.543-1.991-.915-3.085-1.079-1.11-.166-2.09-.102-2.7.132a.75.75 0 1 1-.536-1.401c.947-.363 2.218-.4 3.458-.215"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.131 4.965c-.174.214-.36.443-.544.646a.75.75 0 0 1-.897.167.94.94 0 0 0-.463-.126c-.171 0-.41.043-.827.173a.75.75 0 0 1-.728-.16q-.082-.074-.175-.153c-.148-.127-.313-.27-.473-.441a6.3 6.3 0 0 0-.254 1.218c-.123 1.161.097 2.181.694 2.715a.75.75 0 1 1-1 1.119C3.319 9.098 3.14 7.447 3.279 6.13a7.6 7.6 0 0 1 .45-1.895c.203-.526.487-1.049.854-1.366a.75.75 0 0 1 1.237.495c.042.433.185.587.548.91.298-.075.58-.121.855-.122q.307 0 .58.07l.158-.195.11-.135c.21-.257.445-.538.69-.786.432-.436 1.169-1.053 2.082-.797a.75.75 0 0 1 .435 1.118c-.806 1.297-.032 2.733.944 3.03a.75.75 0 0 1 .52.847c-.13.744-.663 1.363-1.2 1.84-.55.49-1.228.937-1.864 1.323-.241.178-.35.322-.396.41-.042.08-.038.123-.034.146.014.077.113.24.36.372.005.002.04.011.117.014q.159.007.442-.036c.243-.036.483-.086.751-.143.186-.039.385-.08.608-.123.492-.092 1.064-.176 1.598-.122.55.054 1.15.266 1.55.844a.75.75 0 0 1-.572 1.175c-.526.032-.776.251-1.307.809l-.047.05a10 10 0 0 1-1.04.98c1.41.188 2.426-.191 3.083-.661 1.767-1.371 2.557-3.158 2.558-4.914q-.002-.287.001-.543c.004-.508.008-.945-.08-1.446-.109-.63-.37-1.36-1.034-2.299a.75.75 0 1 1 1.224-.866c.78 1.102 1.137 2.037 1.288 2.908.113.648.107 1.266.102 1.803q-.002.226-.001.432v.007c0 2.242-1.022 4.466-3.15 6.112l-.02.016c-1.325.954-3.402 1.463-6.125.43a.75.75 0 0 1-.045-1.384c1.094-.498 1.649-1.081 2.161-1.62l.039-.04q.103-.108.21-.218l-.115.021-.504.102c-.31.065-.637.133-.911.174a4 4 0 0 1-.713.051 1.74 1.74 0 0 1-.767-.185l.353-.662-.353.662c-.466-.248-1.008-.727-1.137-1.43-.143-.783.277-1.499 1.05-2.058l.051-.034c.624-.378 1.22-.774 1.672-1.177.205-.182.359-.347.471-.493-.929-.61-1.567-1.723-1.577-2.939a22 22 0 0 0-.307.373"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFirefoxOutline;
