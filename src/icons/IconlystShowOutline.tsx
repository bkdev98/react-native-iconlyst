import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystShowOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.003 4c4.136.003 7.85 2.903 9.936 7.756a.74.74 0 0 1 0 .592c-2.085 4.855-5.8 7.754-9.936 7.757h-.006c-4.136-.003-7.85-2.902-9.936-7.757a.75.75 0 0 1 0-.592C4.147 6.903 7.86 4.004 11.997 4zM12 5.5c-3.436.002-6.57 2.444-8.43 6.553 1.86 4.108 4.993 6.552 8.43 6.552s6.57-2.443 8.43-6.552C18.57 7.944 15.437 5.5 12 5.5m0 2.641a3.917 3.917 0 0 1 3.912 3.912A3.915 3.915 0 0 1 12 15.963a3.915 3.915 0 0 1-3.911-3.91 3.916 3.916 0 0 1 3.91-3.912m0 1.5a2.414 2.414 0 0 0-2.411 2.412 2.413 2.413 0 0 0 2.41 2.41 2.414 2.414 0 0 0 2.413-2.41A2.415 2.415 0 0 0 12 9.641"
    />
  </Svg>
);
export default IconlystShowOutline;
