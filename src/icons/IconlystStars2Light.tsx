import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStars2Light = ({
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
      d="m7.056 13.792.734 1.467a.5.5 0 0 0 .372.266l1.643.237a.487.487 0 0 1 .273.832L8.89 17.735a.48.48 0 0 0-.142.432l.28 1.61a.493.493 0 0 1-.717.515l-1.467-.76a.5.5 0 0 0-.46 0l-1.468.76a.492.492 0 0 1-.718-.514l.28-1.61a.48.48 0 0 0-.141-.433l-1.19-1.141a.487.487 0 0 1 .276-.832l1.64-.236a.5.5 0 0 0 .374-.266l.736-1.468a.496.496 0 0 1 .883 0M17.83 13.792l.733 1.467a.5.5 0 0 0 .373.266l1.642.237a.487.487 0 0 1 .274.832l-1.188 1.141a.48.48 0 0 0-.142.432l.281 1.61a.493.493 0 0 1-.718.515l-1.468-.76a.5.5 0 0 0-.46 0l-1.467.76a.493.493 0 0 1-.718-.514l.281-1.61a.48.48 0 0 0-.142-.433l-1.189-1.141a.486.486 0 0 1 .274-.832l1.642-.236a.5.5 0 0 0 .372-.266l.736-1.468a.496.496 0 0 1 .883 0M12.443 5.751l.733 1.467a.5.5 0 0 0 .373.266l1.642.237a.487.487 0 0 1 .274.832l-1.188 1.141a.48.48 0 0 0-.142.432l.281 1.61a.493.493 0 0 1-.718.515l-1.467-.76a.5.5 0 0 0-.461 0l-1.467.76a.492.492 0 0 1-.718-.513l.281-1.612a.48.48 0 0 0-.142-.432l-1.189-1.14a.488.488 0 0 1 .274-.833l1.642-.236c.16-.022.3-.122.373-.266l.735-1.468a.498.498 0 0 1 .884 0"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStars2Light;
