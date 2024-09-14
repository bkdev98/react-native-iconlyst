import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSquareCloudBulk = ({
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
      d="M17.217 2H8.783C5.623 2 3.5 4.221 3.5 7.526v7.948C3.5 18.779 5.623 21 8.783 21h8.433c3.161 0 5.284-2.221 5.284-5.526V7.526C22.5 4.221 20.377 2 17.217 2"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M17.021 15.708c-.422.17-.857.256-1.255.256h-5.535a3.3 3.3 0 0 1-1.221-.247 3.1 3.1 0 0 1-1.845-2.828c0-1.543.974-2.727 2.396-3.02.29-1.325 1.403-2.838 3.439-2.838s3.15 1.513 3.44 2.838c1.422.293 2.396 1.477 2.396 3.02 0 1.214-.712 2.32-1.815 2.82m-2.003-5.158a.75.75 0 0 0 .743.75c.762.006 1.575.427 1.575 1.59 0 .624-.367 1.195-.903 1.438a1.9 1.9 0 0 1-.667.136H10.23c-.2 0-.446-.052-.631-.126a1.59 1.59 0 0 1-.935-1.448c0-1.163.814-1.584 1.575-1.59a.75.75 0 0 0 .744-.75c0-.4.359-2.019 2.017-2.019s2.017 1.618 2.017 2.018"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSquareCloudBulk;
