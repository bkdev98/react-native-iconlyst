import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDoubleHeart4Light = ({
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
      d="M13.825 12.25c.001-1.532 1.03-2.957 2.635-2.958a2.6 2.6 0 0 1 1.19.293c.369.19.65.578.89.916.393-.133.848-.282 1.257-.222.41.059.8.214 1.139.452 1.302.94 1.312 2.696.42 3.94-1.393 1.98-4.937 2.43-4.937 2.43s-2.581-2.39-2.594-4.851"
      clipRule="evenodd"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M15.064 15.649c-1.227 1.6-2.512 2.659-2.512 2.659s-5.684-1.07-7.745-4.387C3.48 11.82 3.678 8.984 5.867 7.59a4.16 4.16 0 0 1 1.885-.62c.657-.059 1.383.226 2.001.471.422-.52.914-1.117 1.532-1.393a4.4 4.4 0 0 1 1.944-.353c2.13.127 3.533 1.747 3.886 3.69"
    />
  </Svg>
);
export default IconlystDoubleHeart4Light;
