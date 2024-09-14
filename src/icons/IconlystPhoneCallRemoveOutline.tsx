import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRemoveOutline = ({
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
      d="M5.44 18.662a2.83 2.83 0 0 1-2.13-.622c-.573-.558-.806-1.457-.806-3.1l.002-.105a3.09 3.09 0 0 1 .944-2.35c1.414-1.43 4.376-2.158 8.8-2.159 4.427 0 7.387.726 8.8 2.158a3.08 3.08 0 0 1 .944 2.348v.1c0 1.65-.233 2.548-.808 3.107-.677.662-1.616.637-2.808.607q-.424-.014-.922-.015a2.516 2.516 0 0 1-2.561-1.86c-.374-.854-.67-1.529-2.652-1.529s-2.276.676-2.65 1.53a2.516 2.516 0 0 1-2.56 1.862q-.492.002-.913.014c-.231.008-.461.014-.68.014m6.814-6.838c-4.995 0-6.963.932-7.734 1.713a1.61 1.61 0 0 0-.512 1.278q.003.103-.007.205c-.082.67.043 1.35.359 1.947.226.22.889.207 1.732.183q.438-.012.952-.014c.766 0 .88-.262 1.185-.96.423-.969 1.06-2.432 4.025-2.432 2.964 0 3.6 1.461 4.025 2.428.307.7.42.961 1.186.961q.52.002.962.015c.835.021 1.5.038 1.723-.18a3.44 3.44 0 0 0 .354-2.034v.01-.132a1.6 1.6 0 0 0-.512-1.276c-.773-.78-2.739-1.712-7.738-1.712m3.214-5.006H9.035a.75.75 0 0 1 0-1.5h6.432a.75.75 0 0 1 0 1.5"
    />
  </Svg>
);
export default IconlystPhoneCallRemoveOutline;
