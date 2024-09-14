import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDangerBrokencurved = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12.25 21.535c-6.494 0-9.043-.461-9.456-2.797-.414-2.335 2.23-6.726 3.044-8.174 2.725-4.845 4.576-7.03 6.412-7.03s3.687 2.185 6.412 7.03c.814 1.448 3.458 5.839 3.044 8.174-.303 1.719-1.765 2.423-5.106 2.675M12.25 9.035v3.895M12.246 16.43h.009"
    />
  </Svg>
);
export default IconlystDangerBrokencurved;
