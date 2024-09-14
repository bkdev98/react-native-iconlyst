import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSearchWwwBulk = ({
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
      d="M11.133 2.498a8.42 8.42 0 1 0 .001 16.84 8.42 8.42 0 0 0 0-16.84"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      d="M21.14 10.29a.75.75 0 1 0-1.377-.595l-.504 1.164-.519-.886a.75.75 0 0 0-1.296.003l-.51.882-.512-1.167a.75.75 0 0 0-1.374.602l1.106 2.523a.75.75 0 0 0 1.336.075l.607-1.049.616 1.052a.75.75 0 0 0 1.335-.08zM6.655 9.304a.75.75 0 0 1 .39.986l-1.091 2.523a.75.75 0 0 1-1.336.081l-.616-1.052-.607 1.049a.75.75 0 0 1-1.336-.075L.954 10.293a.75.75 0 0 1 1.374-.602l.51 1.167.511-.882a.75.75 0 0 1 1.296-.003l.52.886.504-1.164a.75.75 0 0 1 .986-.39M14.091 10.29a.75.75 0 0 0-1.376-.595l-.504 1.164-.52-.886a.75.75 0 0 0-1.296.003l-.51.882-.511-1.167A.75.75 0 1 0 8 10.293l1.105 2.523a.75.75 0 0 0 1.336.075l.607-1.049.616 1.052a.75.75 0 0 0 1.335-.08zM19.009 17.816l1.984 1.979a1 1 0 1 1-1.412 1.416l-1.984-1.978a1.001 1.001 0 0 1 1.412-1.417"
    />
  </Svg>
);
export default IconlystSearchWwwBulk;
