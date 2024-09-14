import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMapOutline = ({
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
      d="M15.609 21.638c-.256 0-.51-.045-.75-.133L9.127 19.42a.7.7 0 0 0-.518.017l-3.588 1.6A1.793 1.793 0 0 1 2.5 19.398V6.73A2.67 2.67 0 0 1 4.084 4.29l3.915-1.739a2.17 2.17 0 0 1 1.642-.058l5.732 2.085a.68.68 0 0 0 .518-.017l3.588-1.6A1.793 1.793 0 0 1 22 4.601v12.664a2.67 2.67 0 0 1-1.584 2.438l-3.915 1.74a2.2 2.2 0 0 1-.892.195m-.239-1.543a.7.7 0 0 0 .519-.018l3.916-1.74a1.17 1.17 0 0 0 .693-1.067V4.605a.292.292 0 0 0-.412-.268l-3.587 1.594a2.18 2.18 0 0 1-1.64.057L9.125 3.903a.7.7 0 0 0-.518.018l-3.916 1.74a1.17 1.17 0 0 0-.693 1.068v12.664a.292.292 0 0 0 .411.27l3.588-1.6a2.17 2.17 0 0 1 1.642-.058z"
    />
    <Path
      fill={props.color}
      d="M8.832 19.27a.75.75 0 0 1-.75-.75V3.125a.75.75 0 1 1 1.5 0V18.52a.75.75 0 0 1-.75.75M15.66 21.6a.75.75 0 0 1-.75-.75V5.383a.75.75 0 1 1 1.5 0v15.469a.75.75 0 0 1-.75.748"
    />
  </Svg>
);
export default IconlystMapOutline;
