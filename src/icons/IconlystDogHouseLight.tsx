import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDogHouseLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.785 21.3h10.431a3.32 3.32 0 0 0 3.322-3.322v-7.173c0-.891-.401-1.735-1.092-2.298l-5.574-4.54a2.96 2.96 0 0 0-3.743 0l-5.574 4.54a2.97 2.97 0 0 0-1.092 2.298v7.173a3.32 3.32 0 0 0 3.322 3.323"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.428 12.507c-.633 0-1.146.513-1.147 1.146H9.724a1.146 1.146 0 1 0-1.629 1.038 1.144 1.144 0 0 0 .483 2.183c.633 0 1.146-.513 1.146-1.146h4.558a1.147 1.147 0 0 0 2.294 0c0-.46-.273-.855-.664-1.037a1.145 1.145 0 0 0-.483-2.184"
    />
  </Svg>
);
export default IconlystDogHouseLight;
