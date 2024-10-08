import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHospitalPhoneOutline = ({
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
      d="M15.672 21.43h-6.85a4.8 4.8 0 0 1-3.641-1.546 4.2 4.2 0 0 1-.971-3.38l.744-3.842a.75.75 0 1 1 1.473.286l-.737 3.8a2.67 2.67 0 0 0 .62 2.149 3.3 3.3 0 0 0 2.513 1.035h6.849a3.44 3.44 0 0 0 2.66-1.13 2.4 2.4 0 0 0 .49-2.054l-.746-3.8a.75.75 0 0 1 1.473-.29l.747 3.8a3.92 3.92 0 0 1-.806 3.3 4.95 4.95 0 0 1-3.818 1.673"
    />
    <Path
      fill={props.color}
      d="M13.166 17.976H11.34a1.1 1.1 0 0 1-1.093-1.095v-.663H9.58a1.1 1.1 0 0 1-1.094-1.094v-1.83a1.1 1.1 0 0 1 1.094-1.095h.667v-.664a1.1 1.1 0 0 1 1.093-1.094h1.827a1.1 1.1 0 0 1 1.094 1.094v.663h.666a1.1 1.1 0 0 1 1.094 1.094v1.831a1.1 1.1 0 0 1-1.094 1.094h-.666v.663a1.1 1.1 0 0 1-1.094 1.096m-1.42-1.5h1.014v-1.008a.75.75 0 0 1 .75-.75h1.01v-1.02h-1.01a.75.75 0 0 1-.75-.75v-1.007h-1.014v1.008a.75.75 0 0 1-.75.75h-1.01v1.02h1.01a.75.75 0 0 1 .75.75z"
    />
    <Path
      fill={props.color}
      d="M5.44 10.906a2.83 2.83 0 0 1-2.13-.622c-.574-.558-.807-1.457-.807-3.1l.752-.115-.75.01a3.08 3.08 0 0 1 .944-2.35c1.415-1.433 4.376-2.158 8.8-2.159s7.385.725 8.8 2.156a3.09 3.09 0 0 1 .946 2.35v.105c0 1.648-.233 2.548-.807 3.106-.678.661-1.615.638-2.807.607a32 32 0 0 0-.925-.016 2.515 2.515 0 0 1-2.56-1.859c-.374-.854-.67-1.53-2.653-1.53s-2.277.676-2.651 1.531a2.51 2.51 0 0 1-2.56 1.861c-.328 0-.633.008-.913.015-.231.004-.461.01-.68.01m6.813-6.838C7.258 4.068 5.29 5 4.519 5.78a1.62 1.62 0 0 0-.512 1.28q.003.102-.007.204a3.3 3.3 0 0 0 .359 1.946c.226.222.888.205 1.732.185.293-.008.609-.016.952-.016.765 0 .879-.26 1.185-.96.422-.969 1.06-2.432 4.025-2.432s3.605 1.462 4.026 2.43c.308.7.422.96 1.188.96.347 0 .668.008.963.015.834.022 1.5.04 1.72-.18a3.43 3.43 0 0 0 .355-2.033v.01-.132a1.61 1.61 0 0 0-.513-1.278c-.775-.779-2.744-1.71-7.74-1.71"
    />
  </Svg>
);
export default IconlystHospitalPhoneOutline;
