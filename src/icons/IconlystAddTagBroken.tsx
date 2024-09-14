import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAddTagBroken = ({
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
      d="M15.983 5.906c-.215-.215-1.215-1.228-1.431-1.443-.971-.972-2.151-1.462-3.522-1.462-1.398 0-4.757-.01-5.047.037-1.398.245-2.47 1.524-2.478 2.94 0 .79-.046 4.177.036 5.085.109 1.143.58 2.114 1.38 2.922q.855.865 1.717 1.726M17.638 18.102q-1.078 1.076-2.16 2.147c-1.224 1.207-3.095 1.189-4.32-.027q-1.062-1.061-2.125-2.12"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M7.228 8.342a1.623 1.623 0 0 0 1.61 1.612c.886.002 1.62-.72 1.623-1.598.004-.892-.714-1.632-1.585-1.635M16.496 11.488h4.996M18.993 8.99v4.996"
    />
  </Svg>
);
export default IconlystAddTagBroken;
