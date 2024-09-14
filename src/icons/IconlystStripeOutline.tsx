import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystStripeOutline = ({
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
      d="M7.099 3.9c1.336-1.096 3.186-1.65 5.298-1.65 1.657 0 3.249.207 4.853.85l.057.025c.489.244.713.726.713 1.168v3.381c0 .477-.25.855-.583 1.068a1.3 1.3 0 0 1-1.158.119c-1.304-.56-2.695-.835-3.882-.835-.508 0-.76.075-.865.14-.039.023-.047.038-.05.045a.35.35 0 0 0-.025.16c0 .026 0 .06.083.138.107.101.303.22.628.358.318.136.698.265 1.143.415l.036.012c.426.143.9.303 1.378.492.979.39 2.042.93 2.867 1.823.845.913 1.395 2.143 1.423 3.81v.012c0 2.006-.791 3.622-2.19 4.717-1.376 1.079-3.272 1.602-5.422 1.602a14.3 14.3 0 0 1-5.407-1.074 1.3 1.3 0 0 1-.713-1.168v-3.58c0-.374.144-.796.52-1.046.385-.257.835-.218 1.183-.013 1.421.657 3.081 1.105 4.317 1.105.258 0 .436-.013.563-.035a.6.6 0 0 0 .137-.037c.015-.037.042-.138.042-.372 0-.133-.065-.336-.694-.657-.293-.15-.646-.292-1.06-.452l-.224-.086a31 31 0 0 1-1.098-.44c-.913-.392-1.914-.919-2.684-1.76-.792-.864-1.3-2.016-1.3-3.566 0-1.95.76-3.561 2.114-4.67m4.894 12.02q0-.002.007-.01zM8.05 5.06c-.983.805-1.565 1.98-1.565 3.51 0 1.184.375 1.971.907 2.552.553.604 1.318 1.029 2.17 1.395.346.149.69.281 1.036.414l.235.09c.413.16.832.328 1.2.516.695.354 1.513.933 1.513 1.993 0 .562-.106 1.18-.64 1.574-.459.338-1.073.37-1.602.37-1.385 0-3.065-.438-4.52-1.055v2.96c1.543.608 3.17.871 4.62.871 1.927 0 3.462-.471 4.497-1.282 1.012-.793 1.613-1.96 1.615-3.53-.023-1.314-.443-2.183-1.024-2.81-.6-.65-1.42-1.09-2.32-1.448-.44-.174-.88-.323-1.316-.47l-.022-.007c-.432-.145-.87-.293-1.253-.456-.376-.16-.764-.36-1.065-.643-.323-.302-.558-.712-.558-1.234 0-.623.256-1.158.795-1.486.466-.284 1.06-.358 1.645-.358 1.29 0 2.744.273 4.123.813V4.425c-1.322-.5-2.66-.675-4.123-.675-1.865 0-3.347.49-4.348 1.31"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystStripeOutline;
