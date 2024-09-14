import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBloggerCircleLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.776 7.4c-.672.008-1.169-.017-1.84.016-.803.068-1.598.451-2.074 1.113-.328.444-.475 1.002-.464 1.55.006 1.278-.008 2.557.007 3.836.06 1.393 1.28 2.614 2.672 2.676 1.226.017 2.452.004 3.677.006 1.126.008 2.2-.73 2.624-1.77.352-.83.174-1.752.217-2.627-.036-.39.12-.867-.193-1.177-.308-.322-1.01-.013-1.324-.323-.242-.249-.221-.625-.243-.946-.025-.618-.337-1.206-.806-1.602-.62-.53-1.447-.767-2.253-.752M10.194 10.285h1.672M10.194 13.594h3.077"
    />
  </Svg>
);
export default IconlystBloggerCircleLight;
