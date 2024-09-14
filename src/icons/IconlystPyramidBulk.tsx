import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPyramidBulk = ({
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
      d="m8.619 14.312-1.396.699a.748.748 0 0 1-1.006-.335.75.75 0 0 1 .335-1.008l1.395-.698a.75.75 0 0 1 .672 1.342m2.633-1.179c0-.092-.085-.14-.177-.14a.75.75 0 0 1-.335-1.422l.345-.173a.3.3 0 0 0 .167-.268V3.263c0-.215-.22-.358-.396-.233-.175.126-.33.281-.454.468L2.826 14.867a2 2 0 0 0-.146.261c-.1.22.137.398.352.291l.734-.364a.75.75 0 0 1 .668 1.343l-1.166.58c-.173.086-.22.31-.073.434q.17.14.37.24l7.144 3.569q.084.042.17.076c.184.074.373-.073.373-.27z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.381 14.313 1.396.698a.748.748 0 0 0 1.006-.335.75.75 0 0 0-.335-1.006l-1.395-.7a.75.75 0 0 0-.672 1.342m-2.633-1.179c0-.093.085-.14.177-.14a.75.75 0 0 0 .335-1.422l-.345-.173a.3.3 0 0 1-.167-.268V3.264c0-.215.22-.358.396-.233.175.126.33.281.454.467l7.576 11.37q.085.125.146.261c.1.22-.137.398-.352.291l-.734-.364a.75.75 0 0 0-.668 1.344l1.167.58c.172.085.22.31.072.433a2 2 0 0 1-.37.24l-7.144 3.569a2 2 0 0 1-.17.076c-.184.074-.373-.073-.373-.27z"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystPyramidBulk;
