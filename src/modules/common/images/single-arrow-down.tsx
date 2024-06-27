import React from 'react'
import {IconProps} from '@/lib/data/models/icon'

const SingleArrowDownIcon: React.FC<IconProps> = ({
  width = '21',
  height = '31',
  color = 'black',
  ...attributes
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      zoomAndPan="magnify"
      viewBox="0 0 15.75 23.25"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      {...attributes}
    >
      <defs>
        <clipPath id="5c6beb2668">
          <path
            d="M 0.242188 11 L 14.773438 11 L 14.773438 21.792969 L 0.242188 21.792969 Z M 0.242188 11 "
            clipRule="nonzero"
          />
        </clipPath>
        <clipPath id="42a9140fe4">
          <path d="M 6 0.28125 L 10 0.28125 L 10 21 L 6 21 Z M 6 0.28125 " clipRule="nonzero" />
        </clipPath>
        <clipPath id="301ec13f2a">
          <path
            d="M 0.242188 11 L 14.773438 11 L 14.773438 22.078125 L 0.242188 22.078125 Z M 0.242188 11 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <path
        fill="#000000"
        d="M 9.175781 2.078125 C 9.207031 1.984375 9.230469 1.882812 9.242188 1.777344 C 9.339844 0.9375 8.746094 0.171875 7.910156 0.0742188 C 7.292969 0 6.875 0.234375 6.566406 0.554688 C 6.386719 0.75 6.234375 1 6.160156 1.3125 C 6.113281 1.523438 6.121094 1.839844 6.128906 1.988281 C 6.128906 1.988281 6.3125 7.25 6.3125 7.25 C 6.371094 8.734375 6.390625 10.214844 6.382812 11.695312 C 6.375 13.9375 6.3125 16.183594 6.261719 18.433594 C 6.242188 19.28125 6.910156 19.984375 7.746094 20.003906 C 8.585938 20.023438 9.285156 19.351562 9.304688 18.503906 C 9.355469 16.234375 9.417969 13.96875 9.425781 11.707031 C 9.433594 10.179688 9.414062 8.65625 9.351562 7.125 Z M 8.269531 3.03125 C 8.074219 3.109375 7.859375 3.140625 7.636719 3.128906 C 7.882812 3.144531 8.089844 3.105469 8.269531 3.03125 Z M 8.269531 3.03125 "
        fillOpacity="1"
        fillRule="evenodd"
      />
      <g clipPath="url(#5c6beb2668)">
        <path
          fill="#000000"
          d="M 7.714844 17.882812 L 7.460938 17.503906 C 6.554688 16.195312 5.742188 14.542969 4.6875 13.199219 C 4.140625 12.5 3.53125 11.878906 2.835938 11.390625 C 2.148438 10.90625 1.199219 11.074219 0.71875 11.769531 C 0.238281 12.460938 0.40625 13.417969 1.09375 13.902344 C 1.710938 14.339844 2.214844 14.953125 2.675781 15.613281 C 3.511719 16.804688 4.203125 18.15625 4.960938 19.257812 C 5.117188 19.480469 6.03125 20.953125 6.566406 21.351562 C 7.160156 21.789062 7.734375 21.785156 8.148438 21.652344 C 8.296875 21.601562 8.792969 21.320312 9.347656 20.6875 C 10.320312 19.5625 12.386719 16.863281 13.511719 15.828125 C 13.546875 15.796875 13.589844 15.761719 13.625 15.730469 C 14.167969 15.550781 14.589844 15.070312 14.664062 14.460938 C 14.769531 13.621094 14.179688 12.851562 13.34375 12.75 C 13.007812 12.707031 12.246094 12.839844 11.460938 13.5625 C 10.488281 14.457031 8.847656 16.503906 7.714844 17.882812 Z M 7.714844 17.882812 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath="url(#42a9140fe4)">
        <path
          fill="#000000"
          d="M 9.175781 2.363281 C 9.207031 2.269531 9.230469 2.167969 9.242188 2.0625 C 9.339844 1.222656 8.746094 0.457031 7.910156 0.359375 C 7.292969 0.285156 6.875 0.515625 6.566406 0.839844 C 6.386719 1.03125 6.234375 1.285156 6.160156 1.597656 C 6.113281 1.808594 6.121094 2.125 6.128906 2.273438 C 6.128906 2.273438 6.3125 7.53125 6.3125 7.53125 C 6.371094 9.019531 6.390625 10.5 6.382812 11.976562 C 6.375 14.222656 6.3125 16.464844 6.261719 18.71875 C 6.242188 19.566406 6.910156 20.269531 7.746094 20.289062 C 8.585938 20.308594 9.285156 19.636719 9.304688 18.789062 C 9.355469 16.515625 9.417969 14.253906 9.425781 11.992188 C 9.433594 10.464844 9.414062 8.941406 9.351562 7.410156 Z M 8.269531 3.316406 C 8.074219 3.390625 7.859375 3.425781 7.636719 3.414062 C 7.882812 3.429688 8.089844 3.390625 8.269531 3.316406 Z M 8.269531 3.316406 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
      <g clipPath="url(#301ec13f2a)">
        <path
          fill="#000000"
          d="M 7.714844 18.164062 L 7.460938 17.789062 C 6.554688 16.480469 5.742188 14.828125 4.6875 13.484375 C 4.140625 12.785156 3.53125 12.164062 2.835938 11.675781 C 2.148438 11.1875 1.199219 11.359375 0.71875 12.050781 C 0.238281 12.746094 0.40625 13.703125 1.09375 14.1875 C 1.710938 14.625 2.214844 15.238281 2.675781 15.898438 C 3.511719 17.089844 4.203125 18.441406 4.960938 19.542969 C 5.117188 19.765625 6.03125 21.238281 6.566406 21.636719 C 7.160156 22.074219 7.734375 22.066406 8.148438 21.933594 C 8.296875 21.886719 8.792969 21.605469 9.347656 20.96875 C 10.320312 19.847656 12.386719 17.148438 13.511719 16.113281 C 13.546875 16.082031 13.589844 16.042969 13.625 16.011719 C 14.167969 15.835938 14.589844 15.355469 14.664062 14.746094 C 14.769531 13.90625 14.179688 13.136719 13.34375 13.03125 C 13.007812 12.992188 12.246094 13.125 11.460938 13.847656 C 10.488281 14.742188 8.847656 16.789062 7.714844 18.164062 Z M 7.714844 18.164062 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
    </svg>
  )
}

export default SingleArrowDownIcon
